interface Props {
  price: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  category: string [];
}

function Card(props: Props) {
  return (
    <>
      <div data-category="Coding,Job Based,Practical">
        <div
          className="shadow rounded-lg overflow-hidden border max-w-sm mx-auto pb-4"
          data-animate="card"
          data-duration="1.2"
          data-delay="0.1"
        >
          <div className="relative">
            <span className="absolute top-20px right-20px shadow bg-bright-orange text-white rounded-lg px-4 py-3">
              {props.price}
            </span>
            <img
              className="w-full"
              src={props.cover}
              alt={props.title}
              loading="lazy"
            />
          </div>
          <div className="p-4 md:p-6">
            <p className="text-bright-orange font-bold text-sm md:text-base">
              {props.title}
            </p>
            <p className="font-bold md:text-lg">{props.subtitle}</p>
            <p className="maxline_3 text-ncolor-600 pb-8">
                {props.description}
            </p>
            <a href="/courses/details/">
              <button className="font-medium btn mx-auto">কোর্স বিবরণ</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
