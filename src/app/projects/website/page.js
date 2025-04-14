import Image from "next/image";

const Website = () => {
  return (
    <div className="relative bg-black/90">
      <div className="website-grid image-grid">
        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://booking-system.zeabur.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={100}
                className="tile-img tile-img5"
                src="/image/web/w-1.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://picture-web.vercel.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={100}
                className="tile-img tile-img5"
                src="/image/web/w-2.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://hwensu.github.io/learning-tool/"
              target="_blank"
            >
              <Image
                width={300}
                height={100}
                className="tile-img tile-img5"
                src="/image/web/w-3.png"
                alt="Image"
                target="_blank"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://hwensu.github.io/gess-cards-game/"
              target="_blank"
            >
              <Image
                width={300}
                height={100}
                className="tile-img tile-img5"
                src="/image/web/w-4.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="/" target="_blank">
              <Image
                width={300}
                height={100}
                className="tile-img tile-img5"
                src="/image/web/w-5.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;