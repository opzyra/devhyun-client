import { StyledList } from "./List.style";
import Item, { ItemProps } from "./Item";

export interface ListProps {
  items: ItemProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <StyledList>
      {items.map(({ name, mock, title, spec, period }, index) => (
        <Item
          name={name}
          mock={mock}
          title={title}
          spec={spec}
          period={period}
          key={index}
        />
      ))}
    </StyledList>
  );
};

export default List;
