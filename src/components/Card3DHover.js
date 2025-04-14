import Image from "next/image";

const Card3DHover = () => {
  return (
    <div className="self-end flex">
      <div className="card">
        <div className="wrapper">
          <Image
            alt="image"
            src="/image/jac/The New Black拷貝2.jpeg"
            className="cover-image"
          />
        </div>
        <p className="title"> SINGLE JERSEY JAC</p>
        <Image
          alt="image"
          src="/image/jac/TNB_background_removed (4).png"
          className="character"
        />
      </div>
      <div className="card">
        <div className="wrapper">
          <Image
            alt="image"
            src="/image/jac/The New Black (1).jpeg"
            className="cover-image"
          />
        </div>
        <p className="title"> ENGINEERING JAC</p>
        <Image
          alt="image"
          src="/image/jac/TNB_background_removed (6).png"
          className="character"
        />
      </div>
    </div>
  );
}

export default Card3DHover