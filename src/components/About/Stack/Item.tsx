import { StyledItem } from "./Item.style";

export interface ItemProps {
  src: string;
  name: string;
  level: string;
  desc: string;
}

const Item: React.FC<ItemProps> = ({ src, name, level, desc }) => {
  return (
    <StyledItem>
      <img src={src} alt={name} />
      <div>
        <h3>
          {name}
          <span className="prod">{level}</span>
        </h3>
        <p>{desc}</p>
      </div>
    </StyledItem>
  );
};

export default Item;
