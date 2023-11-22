import { addTwoNumbers } from "../utils";

export default function about() {
  const summ = addTwoNumbers(2, 14);
  return <main>about page {summ}</main>;
}
