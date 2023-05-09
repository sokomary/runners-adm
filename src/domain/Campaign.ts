import { Moment } from "moment";
import { Courier } from "./Courier";
import { Company } from "./Company";

enum CampaignStatus {
  WAITING_FOR_COURIER = "WAITING_FOR_COURIER",
  WAITING_FOR_START = "WAITING_FOR_START",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_FOR_CHECK = "WAITING_FOR_CHECK",
  COMPLETE = "COMPLETE",
  CANCELLED = "CANCELLED",
}

interface Campaign {
  id: number;
  company: Company;
  name: string;
  dateStart: Moment;
  dateEnd: Moment;
  volume: number;
  valuation: number;
  status: CampaignStatus;
  courier?: Courier;
  courierEstimation?: number;
  companyEstimation?: number;
}

const equals = (campaign1: Campaign, campaign2: Campaign) =>
  campaign1.id === campaign2.id &&
  campaign1.company === campaign2.company &&
  campaign1.name === campaign2.name &&
  campaign1.dateStart.toString() === campaign2.dateStart.toString() &&
  campaign1.dateEnd.toString() === campaign2.dateEnd.toString() &&
  campaign1.volume === campaign2.volume &&
  campaign1.valuation === campaign2.valuation &&
  campaign1.status === campaign2.status &&
  campaign1.courier === campaign2.courier &&
  campaign1.courierEstimation === campaign2.courierEstimation &&
  campaign1.companyEstimation === campaign2.companyEstimation;

export { CampaignStatus, equals };

export type { Campaign };
