import Link from "next/link";

import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";

import { StyledSkill, Inner } from "./Skill.style";

import { textToHtml } from "@/utils/convert";

export interface SkillProps {
  name: string;
  skill: string;
}

const Title: React.FC<SkillProps> = ({ name, skill }) => {
  return (
    <StyledSkill>
      <Inner>
        <h2>개발 기술</h2>
        <p dangerouslySetInnerHTML={{ __html: textToHtml(skill) }}></p>
        <Link href={`/blog/tag/${name}`}>
          <a>
            개발 이슈 <Icon path={mdiChevronRight} size={0.7} />
          </a>
        </Link>
      </Inner>
    </StyledSkill>
  );
};

export default Title;
