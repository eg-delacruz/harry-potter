type Props = {
  params: {
    id: string;
  };
};

//Aquí se van a renderizar los posts a partir del id serverside
//Aquí se usará redux para traer los comments de los posts client-side
const page = ({ params }: Props) => {
  const { id } = params;
  return <div>Personaje {id}</div>;
};

export default page;
