'use client';

import { useRef, useEffect, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

//Estos son los props específicos de nuestro componente (sin tener en cuenta los tipos específicos de HTMLImageElement).
//Esto ayuda a que nuestro componente sea más reutilizable y podamos añadirle más funcionalidades sin tener que cambiar los tipos en el futuro
type LazyImageProps = {
  src: string;
  onLazyLoad?: (imgDomNode: HTMLImageElement) => void;
};

//Aquí le damos todas las funcionalidades de la interfaz HTMLImageElement a nuestro componente
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

//Unimos los tipos nativos de HTMLImageElement con los nuestros
type Props = LazyImageProps & ImageNativeTypes;

//imgProps es un objeto que contiene todas las props que se le pasan al componente <img> nativo
const LazyImage = ({ src, onLazyLoad, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoaded, setIsLazyLoaded] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string>(
    //Image placeholder
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  //useEffect
  useEffect(() => {
    if (isLazyLoaded) return;

    //nuevo observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;

        setCurrentSrc(src);
        //Dejamos de observar el nodo. Nótese que podemos acceder al observer dentro de la función porque es un closure
        observer.disconnect();
        //Cambiamos el estado para que no se vuelva a cargar la imagen
        setIsLazyLoaded(true);

        //callback. Se ejecuta cuando la imagen se carga al DOM, no cuando se carga la imagen en sí, pues eso ya lo hace el navegador
        //Necesitamos probar el tipo porque puede ser que no se haya pasado la función como prop
        if (typeof onLazyLoad === 'function') onLazyLoad(node.current);
      });

      //Stop observing
    });

    //observar nodo solo si ya se ha montado el componente (aunque sabemos que sí lo ha hecho por el useEffect)
    if (node.current) observer.observe(node.current!);

    //desconectar. Se ejecuta cuando se desmonta el componente
    return () => observer.disconnect();
  }, [src, onLazyLoad, isLazyLoaded]);

  //imgProps contiene todas las props que se le pasan al componente <img> nativo y se las estamos pasando a nuestro componente
  return <img ref={node} src={currentSrc} {...imgProps} />;
};

export default LazyImage;
