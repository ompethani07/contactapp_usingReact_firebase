import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
const Model = ({ onclose, isopen, children }) => {
  return createPortal(
    <>
      {isopen && (
        <>
          <div className="max-w-[370px] h-0 mx-auto">
            <div className="relative top-[170px] p-4 m-auto rounded-lg min-h-[200px] z-50 w-[80%] bg-white">
              <div className="flex justify-end">
                <IoMdClose
                  onClick={onclose}
                  className="cursor-pointer text-2xl"
                />
              </div>
              {children}
            </div>
            <div
              onClick={onclose}
              className="h-screen w-[370px] z-40 absolute top-0 backdrop-blur"
            />
          </div>
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Model;
