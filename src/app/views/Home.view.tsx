import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layout";

export default function HomeView() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <h1>Home</h1>
    </DefaultLayout>
  );
}
