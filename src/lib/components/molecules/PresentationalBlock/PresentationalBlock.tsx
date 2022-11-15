type Props = {
  items: React.ReactNode[];
};

export const PresentationalBlock = ({ items }: Props) => {
  return (
    <div className="flex flex-col items-center mx-50 md:flex-row md:items-baseline ">
      {items.map((item) => (
        <div className="flex flex-col items-center gap-3 mx-4 w-60">
          {item}
        </div>
      ))}
    </div>
  );
};
