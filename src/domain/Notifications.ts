import { Moment } from "moment";
import { Campaign } from "./Campaign";
import { Courier } from "./Courier";
import { Source } from "./Source";

enum CourierNotificationType {
  NEW_OFFER = "NEW_OFFER",
  REQUEST_ACCEPTED = "REQUEST_ACCEPTED",
  REQUEST_REJECTED = "REQUEST_REJECTED",
  OFFER_CANCELED = "OFFER_CANCELED",
  CAMPAIGN_APPROVED = "CAMPAIGN_APPROVED",
  CAMPAIGN_CANCELLED = "CAMPAIGN_CANCELLED",
  CAMPAIGN_CHANGED = "CAMPAIGN_CHANGED",
}

enum CompanyNotificationType {
  NEW_REQUEST = "NEW_REQUEST",
  REQUEST_CANCELLED = "REQUEST_CANCELLED",
  OFFER_ACCEPTED = "OFFER_ACCEPTED",
  OFFER_REJECTED = "OFFER_REJECTED",
  CAMPAIGN_START = "CAMPAIGN_START",
  REPORT_UPDATED = "REPORT_UPDATED",
  CAMPAIGN_END = "CAMPAIGN_END",
  CAMPAIGN_CANCELLED = "CAMPAIGN_CANCELLED",
}

enum NotificationStatus {
  DELIVERED = "DELIVERED",
  READ = "READ",
}

interface Notification {
  id: number;
  source: Source;
  courier: Courier;
  campaign: Campaign;
  datetime: Moment;
  status: NotificationStatus;
  type: CourierNotificationType | CompanyNotificationType;
}

const isAcceptable = (notification: Notification) =>
  [
    CompanyNotificationType.NEW_REQUEST.toString(),
    CourierNotificationType.NEW_OFFER.toString(),
  ].includes(notification.type.toString());

export type { Notification };
export {
  NotificationStatus,
  CourierNotificationType,
  CompanyNotificationType,
  isAcceptable,
};
