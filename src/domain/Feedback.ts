import { Moment } from "moment";
import { Source } from "./Source";

interface Feedback {
  estimation: number;
  source: Source;
  text: string;
  date: Moment;
}
export type { Feedback };
