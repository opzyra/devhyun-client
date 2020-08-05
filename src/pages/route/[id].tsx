import { useRouter } from "next/router";

export default function Route() {
  const router = useRouter();

  return <div>{router.query.id}</div>;
}
