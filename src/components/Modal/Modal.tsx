type ModalProps = {
  title: string | null;
  text: string | null;
  prompt: string | null;
};

const Modal = ({ title, text, prompt }: ModalProps) => {
  return (
    <div
      className={
        title
          ? "bg-black bg-opacity-50 fixed h-full w-full"
          : "visibility: hidden pointer-events-none"
      }
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white border-2 rounded-xl border-gold">
        <p className="text-text-color-500 text-8xl font-bold mb-8">{title}</p>
        <p>{text}</p>
        <p>{prompt}</p>
      </div>
    </div>
  );
};

export default Modal;
