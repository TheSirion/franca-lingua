const CustomLayout = ({
  title,
  subtitle,
  comment,
}: {
  title: string;
  subtitle: string;
  comment: string;
}) => {
  return (
    <div>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          width: '100%',
          padding: '2em',
          backgroundColor: 'white',
          outline: '1px solid red',
        }}>
        <h1
          style={{
            color: 'red',
            fontSize: '2em',
          }}>
          {title}
        </h1>
        <p>{subtitle}</p>
        <p>Franca Língua: {comment}</p>
      </main>
    </div>
  );
};

export default CustomLayout;
