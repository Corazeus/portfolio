import { BackgroundGradient } from "./background-gradient";

export const Multicards = ({
        image,
        title,
        subtitle,
        description,
    }: {
        image: string,
        title: string;
        subtitle?: string;
        description?: string;
    }) => {
  
    return (
        <div id="main-container" className="flex flex-row items-center mx-auto m-3">
            <BackgroundGradient>
            <div id='card' className="h-fit w-80 bg-blue-950 bg-opacity-50 rounded-3xl justify-center">
                <div id="image" className="w-50 mx-auto">
                    <img src={image} alt="Content" className="mx-auto rounded-3xl w-30"/>
                </div>

                <div id="card-information" className="p-10">
                    <div id="title" className="mx-auto text-center my-5">
                        <h1 className="font-bold text-xl"> {title} </h1>
                        <h3 className="font-light text-base"> {subtitle} </h3>
                    </div>

                    <div id="description" className="mx-auto text-center font-light">
                        <p className="text-sm">{description}</p>
                    </div>
                </div>
            </div>
            </BackgroundGradient>
        </div>
    );
  };