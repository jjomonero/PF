import { useRouter } from "next/router";
import "../../services/firebase";

export default function Produtos(props) {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.slug}</h1>
    </div>
  );
}
