import { StyledList } from "./List.style";
import Item, { ItemProps } from "./Item";

export interface ListProps {
  items: ItemProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <StyledList>
      {items.map(({ href, mock, title, spec, period }) => (
        <Item
          href={href}
          mock={mock}
          title={title}
          spec={spec}
          period={period}
        />
      ))}
    </StyledList>
  );
};

export default List;
