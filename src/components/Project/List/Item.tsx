import Link from "next/link";

import { StyledItem } from "./Item.style";

export interface ItemProps {
  name: string;
  mock: string;
  title: string;
  spec: string;
  period: string;
}

const Item: React.FC<ItemProps> = ({ name, mock, title, spec, period }) => {
  return (
    <StyledItem>
      <Link href={`/project/${name}`}>
        <a>
          <img src={mock} alt={title} />
          <div className="title">{title}</div>
          <div className="desc">
            {spec}
            <br />
            {period}
          </div>
        </a>
      </Link>
    </StyledItem>
  );
};

export default Item;
