import moment from "moment";
import { Campaign, CampaignStatus } from "../domain/Campaign";
import { CampaignAsk } from "../domain/CampaignAsk";
import { Courier } from "../domain/Courier";
import {
  Chat,
  getUnreadMessages,
  Message,
  MessageStatus,
} from "../domain/Chat";
import { Company } from "../domain/Company";
import {
  CompanyNotificationType,
  CourierNotificationType,
  Notification,
  NotificationStatus,
} from "../domain/Notifications";
import { Source } from "../domain/Source";
import { Address } from "../domain/Adddress";
import { CampaignAddress } from "../domain/CampaignAddress";
import { Feedback } from "../domain/Feedback";

const courierLogin = "v";
const courier1: Courier = {
  id: 1,
  phone: "89251235637",
  email: "pelmenylover@gmail.com",
  name: "Илья",
  towns: "Москва",
  zones: "Тимирязевская",
  photo: undefined,
  birthDate: moment("1999-07-07"),
  rate: 4.8,
  paymentMethodToken: "xxxxxx",
  registrationDate: moment("2023-07-07"),
};
const courier2: Courier = {
  id: 2,
  phone: "89251135637",
  email: "lover@gmail.com",
  name: "Саша",
  towns: "Москва",
  zones: "Тимирязевская",
  photo: undefined,
  birthDate: moment("1999-07-07"),
  rate: 4.9,
  paymentMethodToken: "xxxxxx",
  registrationDate: moment("2023-07-07"),
};
const courier3: Courier = {
  id: 3,
  phone: "89251135639",
  email: "pelmeny@gmail.com",
  name: "Жанна",
  towns: "Москва",
  zones: "Тимирязевская",
  photo: undefined,
  birthDate: moment("1999-07-07"),
  rate: 4.9,
  paymentMethodToken: "xxxxxx",
  registrationDate: moment("2022-07-07"),
};
const courier4: Courier = {
  id: 4,
  phone: "89251137639",
  email: "men@gmail.com",
  name: "Коля",
  towns: "Москва",
  zones: "Тимирязевская",
  photo: undefined,
  birthDate: moment("1999-07-07"),
  rate: 4.9,
  paymentMethodToken: "xxxxxx",
  registrationDate: moment("2023-07-07"),
};
const courier5: Courier = {
  id: 5,
  phone: "87251137639",
  email: "pelmenver@gmail.com",
  name: "Настя",
  towns: "Москва",
  zones: "Тимирязевская",
  photo: undefined,
  birthDate: moment("1998-07-07"),
  rate: 4.9,
  paymentMethodToken: "xxxxxx",
  registrationDate: moment("2023-07-07"),
};
const allCouriers = [courier1, courier2, courier3, courier4, courier5];

const companyLogin = "c";
const company1: Company = {
  id: 0,
  name: "Супер-компания",
  phone: "123",
  address: "г. Москва, ул. Уличная, д. 5",
  description: "Самая клевая компания",
  email: "cool-company@gmail.com",
  paymentMethodToken: "xxxxxx",
  registrationDate: moment("2023-07-07"),
  creationDate: moment("2000-03-03"),
};
const allCompanies = [company1];
const currentUser: (Courier | Company)[] = [];

const address1: Address = {
  latitude: 56.732257,
  longitude: 37.147044,
  name: "Адрес 1",
};
const address2: Address = {
  latitude: 56.731971,
  longitude: 37.146343,
  name: "Адрес 2",
};
const address3: Address = {
  latitude: 56.732568,
  longitude: 37.147736,
  name: "Адрес 3",
};
const address4: Address = {
  latitude: 56.731506,
  longitude: 37.147053,
  name: "Адрес 4",
};
const address5: Address = {
  latitude: 56.731753,
  longitude: 37.147709,
  name: "Адрес 5",
};
const address6: Address = {
  latitude: 56.732059,
  longitude: 37.148409,
  name: "Адрес 6",
};

const address7: Address = {
  latitude: 56.745853,
  longitude: 37.189902,
  name: "Адрес 7",
};
const address8: Address = {
  latitude: 56.745957,
  longitude: 37.190576,
  name: "Адрес 8",
};
const address9: Address = {
  latitude: 56.745606,
  longitude: 37.189516,
  name: "Адрес 9",
};
const address10: Address = {
  latitude: 56.745192,
  longitude: 37.189875,
  name: "Адрес 10",
};
const address11: Address = {
  latitude: 56.74534,
  longitude: 37.190379,
  name: "Адрес 11",
};
const address12: Address = {
  latitude: 56.745547,
  longitude: 37.190909,
  name: "Адрес 12",
};

const address13: Address = {
  latitude: 56.712343,
  longitude: 36.776893,
  name: "Конаково 1",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allAddresses = [
  address1,
  address2,
  address3,
  address4,
  address5,
  address6,
  address7,
  address8,
  address9,
  address10,
  address11,
  address12,
  address13,
];

const campaign1: Campaign = {
  id: 0,
  company: company1,
  name: "Первая кампания",
  dateStart: moment("2022-01-21"),
  dateEnd: moment("2022-02-21"),
  volume: 1000,
  valuation: 500,
  courier: courier1,
  status: CampaignStatus.IN_PROGRESS,
  courierEstimation: undefined,
};
const campaign2: Campaign = {
  id: 1,
  company: company1,
  name: "Вторая кампания",
  dateStart: moment("2022-03-22"),
  dateEnd: moment("2022-04-24"),
  volume: 1300,
  valuation: 200,
  courier: courier1,
  status: CampaignStatus.WAITING_FOR_START,
  courierEstimation: undefined,
};
const campaign3: Campaign = {
  id: 2,
  company: company1,
  name: "Третья кампания",
  dateStart: moment("2022-03-22"),
  dateEnd: moment("2022-04-24"),
  volume: 1300,
  valuation: 800,
  courier: undefined,
  status: CampaignStatus.WAITING_FOR_COURIER,
  courierEstimation: undefined,
};
const campaign4: Campaign = {
  id: 3,
  company: company1,
  name: "4 кампания",
  dateStart: moment("2022-03-22"),
  dateEnd: moment("2022-04-24"),
  volume: 1300,
  valuation: 900,
  courier: undefined,
  status: CampaignStatus.WAITING_FOR_COURIER,
  courierEstimation: undefined,
};
const campaign5: Campaign = {
  id: 4,
  company: company1,
  name: "Пятая кампания",
  dateStart: moment("2022-03-22"),
  dateEnd: moment("2022-04-24"),
  volume: 1300,
  valuation: 650,
  courier: undefined,
  status: CampaignStatus.WAITING_FOR_COURIER,
  courierEstimation: undefined,
};
const campaign6: Campaign = {
  id: 5,
  company: company1,
  name: "1234567890-1234567890-1234567890-1234567890-1234567890",
  dateStart: moment("2022-03-22"),
  dateEnd: moment("2022-04-24"),
  volume: 1300,
  valuation: 650,
  courier: undefined,
  status: CampaignStatus.WAITING_FOR_COURIER,
  courierEstimation: undefined,
};

const allCampaignAddresses: CampaignAddress[] = [
  { campaign: campaign1, address: address1, done: true, photos: [] },
  { campaign: campaign1, address: address2, done: true, photos: [] },
  { campaign: campaign1, address: address3, done: true, photos: [] },
  { campaign: campaign1, address: address4, done: false, photos: [] },
  { campaign: campaign1, address: address5, done: true, photos: [] },
  { campaign: campaign1, address: address6, done: true, photos: [] },

  { campaign: campaign2, address: address7, done: false, photos: [] },
  { campaign: campaign2, address: address8, done: true, photos: [] },
  { campaign: campaign2, address: address9, done: true, photos: [] },
  { campaign: campaign2, address: address10, done: false, photos: [] },
  { campaign: campaign2, address: address11, done: false, photos: [] },
  { campaign: campaign2, address: address12, done: false, photos: [] },

  { campaign: campaign3, address: address7, done: true, photos: [] },
  { campaign: campaign3, address: address8, done: true, photos: [] },
  { campaign: campaign3, address: address9, done: true, photos: [] },
  { campaign: campaign3, address: address10, done: true, photos: [] },
  { campaign: campaign3, address: address11, done: true, photos: [] },
  { campaign: campaign3, address: address12, done: false, photos: [] },

  { campaign: campaign4, address: address7, done: true, photos: [] },
  { campaign: campaign4, address: address8, done: true, photos: [] },
  { campaign: campaign4, address: address9, done: true, photos: [] },
  { campaign: campaign4, address: address10, done: true, photos: [] },
  { campaign: campaign4, address: address11, done: true, photos: [] },
  { campaign: campaign4, address: address12, done: false, photos: [] },

  { campaign: campaign5, address: address7, done: false, photos: [] },
  { campaign: campaign5, address: address8, done: false, photos: [] },
  { campaign: campaign5, address: address9, done: false, photos: [] },
  { campaign: campaign5, address: address10, done: false, photos: [] },
  { campaign: campaign5, address: address11, done: false, photos: [] },
  { campaign: campaign5, address: address12, done: false, photos: [] },

  { campaign: campaign6, address: address13, done: false, photos: [] },
];

const allAsks: CampaignAsk[] = [
  {
    id: 0,
    courier: courier1,
    campaign: campaign3,
    source: Source.COURIER,
  },
];

const chat1 = { id: 0, company: company1, courier: courier1 };
const allChats = [chat1];
const message1 = {
  source: Source.COURIER,
  chat: chat1,
  body:
    "Привет! Как твои дела? Что делаешь? Большой текст для примера. " +
    "Прфиыдвлоар флывра фдлоыр агнфукпр дпорафдыориа дфлыовра дфлоывр " +
    "адфшгыкрапод фтоывр афшщгднкр.",
  date: moment("2023-03-02T12:13:00"),
  status: MessageStatus.READ,
};
const message2 = {
  source: Source.COMPANY,
  chat: chat1,
  body: "Добрый день! Как твои дела? Что делаешь?",
  date: moment("2023-03-02T13:14:00"),
  status: MessageStatus.READ,
};
const message3 = {
  source: Source.COMPANY,
  chat: chat1,
  body: "Добрый день! Как твои дела? Что делаешь?",
  date: moment("2023-03-02T13:14:00"),
  status: MessageStatus.READ,
};
const message4 = {
  source: Source.COMPANY,
  chat: chat1,
  body: "Как раз хотел спросить.",
  date: moment("2023-03-02T13:14:20"),
  status: MessageStatus.READ,
};
const message5 = {
  source: Source.COURIER,
  chat: chat1,
  body: "Ответ",
  date: moment("2023-03-02T14:13:00"),
  status: MessageStatus.SEND,
};
const allMessages = [message1, message2, message3, message4, message5];

// все кампании
const allCampaigns = [
  campaign1,
  campaign2,
  campaign3,
  campaign4,
  campaign5,
  campaign6,
];

// все уведомления
const allNotifications: Notification[] = [
  {
    id: 0,
    source: Source.COURIER,
    campaign: campaign3,
    courier: courier1,
    datetime: moment("2023-03-03T13:43:00"),
    status: NotificationStatus.DELIVERED,
    type: CompanyNotificationType.NEW_REQUEST,
  },
  {
    id: 1,
    source: Source.COURIER,
    campaign: campaign2,
    courier: courier1,
    datetime: moment("2023-03-03T13:43:00"),
    status: NotificationStatus.DELIVERED,
    type: CompanyNotificationType.CAMPAIGN_END,
  },
];

const allFeedbacks: Feedback[] = [];
// -------------------------------------------------------------------- couriers
const getCurrentCourier = () => courier1;
const getCourierByLogin = (login: string) =>
  allCouriers.filter((c) => c.phone === login || c.email === login)[0];
const getCourierCampaigns = (courier: Courier) => [
  ...allCampaigns.filter((c) => c.courier?.id === courier.id),
  ...allAsks.filter((a) => a.courier.id === courier.id).map((a) => a.campaign),
];
const getCourierNotifications = (courier: Courier) =>
  allNotifications
    .filter((n) => n.courier.id === courier.id && n.source === Source.COMPANY)
    .sort((a, b) => (a.datetime > b.datetime ? -1 : 1));
const getCourierChats = (courier: Courier) =>
  allChats.filter((c) => c.courier.id === courier.id);
const changeCourier = (courier: Courier) => {
  allCouriers.splice(
    allCouriers.indexOf(allCouriers.filter((c) => c.id === courier.id)[0]),
    1
  );
  allCouriers.push(courier);
  const campaigns = getCourierCampaigns(courier);
  campaigns
    .filter((c) => c.courier)
    .forEach((c) => {
      allCampaigns.splice(allCampaigns.indexOf(c), 1);
      allCampaigns.push({ ...c, courier });
    });
  const notifications = allNotifications.filter(
    (n) => n.courier.id === courier.id
  );
  notifications.forEach((n) => {
    allNotifications.splice(allNotifications.indexOf(n), 1);
    allNotifications.push({ ...n, courier });
  });
  const chats = allChats.filter((n) => n.courier.id === courier.id);
  chats.forEach((c) => {
    allChats.splice(allChats.indexOf(c), 1);
    allChats.push({ ...c, courier });
  });
};
const getCourierById = (id: number) =>
  allCouriers.filter((c) => c.id === id)[0];

// ------------------------------------------------------------------- companies
const getCurrentCompany = () => company1;
const getCompanyByLogin = (login: string) =>
  allCompanies.filter((c) => c.phone === login || c.email === login)[0];
const getCompanyCampaigns = (company: Company) =>
  allCampaigns.filter((c) => c.company.id === company.id);
const getCompanyChats = (company: Company) =>
  allChats.filter((c) => c.company.id === company.id);
const getCompanyCouriers = (company: Company) => {
  const array = getCompanyCampaigns(company)
    .filter((c) => !!c.courier)
    .map((c) => c.courier);
  return array.filter((value, index) => array.indexOf(value) === index);
};
const getCompanyAsks = (company: Company) =>
  allAsks.filter((a) => a.campaign.company.id === company.id);
const getCompanyNotifications = (company: Company) =>
  allNotifications
    .filter(
      (n) => n.campaign.company.id === company.id && n.source === Source.COURIER
    )
    .sort((a, b) => (a.datetime > b.datetime ? -1 : 1));
const getCompanyById = (id: number) =>
  allCompanies.filter((c) => c.id === id)[0];
const changeCompany = (company: Company) => {
  allCompanies.splice(
    allCompanies.indexOf(allCompanies.filter((c) => c.id === company.id)[0]),
    1
  );
  allCompanies.push(company);
  const campaigns = getCompanyCampaigns(company);
  campaigns.forEach((c) => {
    allCampaigns.splice(allCampaigns.indexOf(c), 1);
    allCampaigns.push({ ...c, company });
  });
  const chats = allChats.filter((n) => n.company.id === company.id);
  chats.forEach((c) => {
    allChats.splice(allChats.indexOf(c), 1);
    allChats.push({ ...c, company });
  });
};

// ------------------------- ------------------ asks
const deleteAsk = (courier: Courier, campaign: Campaign) => {
  allAsks.splice(
    allAsks.indexOf(
      allAsks.filter(
        (a) => a.courier.id === courier.id && a.campaign.id === campaign.id
      )[0]
    ),
    1
  );
};

const onAskCancelled = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) => {
  deleteAsk(courier, campaign);
  allNotifications.push({
    id: allNotifications.length,
    source,
    courier,
    campaign,
    datetime: moment(),
    status: NotificationStatus.DELIVERED,
    type:
      source === Source.COMPANY
        ? CourierNotificationType.OFFER_CANCELED
        : CompanyNotificationType.REQUEST_CANCELLED,
  });
};

const onAskAccepted = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) => {
  deleteAsk(courier, campaign);
  setCourier(campaign, courier);
  notifyAboutAccept(campaign, courier, source);
  allAsks.forEach((ask) => {
    if (ask.campaign.id === campaign.id) {
      onAskRejected(ask.campaign, ask.courier, Source.COMPANY);
    }
  });
};

const onAskRejected = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) => {
  deleteAsk(courier, campaign);
  notifyAboutReject(campaign, courier, source);
};
const addAsk = (courier: Courier, campaign: Campaign, source: Source) => {
  allAsks.push({
    id: allAsks.length,
    source,
    campaign,
    courier,
  });
  notifyAboutNewAsk(campaign, courier, source);
};

const getCampaignAsks = (campaign: Campaign) =>
  allAsks.filter((a) => a.campaign.id === campaign.id);
const getCompanyAsksCount = (company: Company) =>
  allAsks.filter((a) => a.campaign.company.id === company.id).length;

// ------------------------ ------------------------------------------- campaigns

const createCampaign = (campaign: Campaign, addresses: CampaignAddress[]) => {
  const newCampaign = { ...campaign, id: allCampaigns.length };
  allCampaigns.push(newCampaign);
  setCampaignAddresses(addresses, newCampaign);
};

const changeCampaign = (campaign: Campaign, addresses: CampaignAddress[]) => {
  allCampaigns.splice(
    allCampaigns.indexOf(allCampaigns.filter((c) => c.id === campaign.id)[0]),
    1
  );
  allCampaigns.push(campaign);
  setCampaignAddresses(addresses, campaign);
  const notifications = allNotifications.filter(
    (n) => n.campaign.id === campaign.id
  );
  notifications.forEach((n) => {
    allNotifications.splice(allNotifications.indexOf(n), 1);
    allNotifications.push({ ...n, campaign });
  });
  notifyAboutChange(campaign);
};
const getCampaignById = (id: string) =>
  allCampaigns.filter((c) => c.id.toString() === id)[0];

const startCampaign = (campaign: Campaign) => {
  allCampaigns.splice(allCampaigns.indexOf(campaign), 1);
  allCampaigns.push({ ...campaign, status: CampaignStatus.IN_PROGRESS });
  notifyAboutStart(campaign);
};

const cancelCampaign = (campaign: Campaign, source: Source) => {
  allCampaigns.splice(allCampaigns.indexOf(campaign), 1);
  allCampaigns.push({
    ...campaign,
    status: CampaignStatus.CANCELLED,
    courier: undefined,
  });
  notifyAboutCancel(campaign, source);
};

const getAddressesByCampaign = (campaign: Campaign) =>
  allCampaignAddresses
    .filter((a) => a.campaign?.id === campaign.id)
    .map((ca) => ca.address);
const getCampaignAddresses = (campaign: Campaign) =>
  allCampaignAddresses.filter((a) => a.campaign?.id === campaign.id);
const setCourier = (campaign: Campaign, courier: Courier) => {
  allCampaigns.splice(allCampaigns.indexOf(campaign), 1);
  allCampaigns.push({
    ...campaign,
    courier,
    status: CampaignStatus.WAITING_FOR_START,
  });
};

// ------------------------------------------------------------------- addresses
const setCampaignAddresses = (
  addresses: CampaignAddress[],
  campaign: Campaign
) => {
  getCampaignAddresses(campaign).forEach((ca) =>
    allCampaignAddresses.splice(allCampaignAddresses.indexOf(ca), 1)
  );
  addresses.forEach((a) => {
    if (!allAddresses.includes(a.address)) {
      allAddresses.push(a.address);
    }
    allCampaignAddresses.push({
      ...a,
      campaign,
    });
  });
};
const deleteCampaignAddress = (campaignAddress: CampaignAddress) => {
  allCampaignAddresses.splice(allCampaignAddresses.indexOf(campaignAddress), 1);
};

const addPhotosToAddressReport = (
  photo: File[],
  campaignAddress: CampaignAddress
) => {
  allCampaignAddresses.splice(allCampaignAddresses.indexOf(campaignAddress), 1);
  allCampaignAddresses.push({
    ...campaignAddress,
    done: true,
    photos: [...campaignAddress.photos, ...photo],
  });
};
const replacePhotosInAddressReport = (
  photos: File[],
  campaignAddress: CampaignAddress
) => {
  allCampaignAddresses.splice(allCampaignAddresses.indexOf(campaignAddress), 1);
  allCampaignAddresses.push({
    ...campaignAddress,
    done: true,
    photos,
  });
};
const unDoneCampaignAddress = (campaignAddress: CampaignAddress) => {
  allCampaignAddresses.splice(allCampaignAddresses.indexOf(campaignAddress), 1);
  allCampaignAddresses.push({
    ...campaignAddress,
    done: false,
    photos: [],
  });
};
const sendReportToReview = (campaign: Campaign) => {
  allCampaigns.splice(allCampaigns.indexOf(campaign), 1);
  allCampaigns.push({
    ...campaign,
    status: CampaignStatus.WAITING_FOR_CHECK,
  });
  allNotifications.push({
    id: allNotifications.length,
    source: Source.COURIER,
    courier: campaign.courier!,
    campaign,
    datetime: moment(),
    status: NotificationStatus.DELIVERED,
    type: CompanyNotificationType.CAMPAIGN_END,
  });
};
const onReportUpdated = (campaign: Campaign) => {
  allNotifications.push({
    id: allNotifications.length,
    source: Source.COURIER,
    courier: campaign.courier!,
    campaign,
    datetime: moment(),
    status: NotificationStatus.DELIVERED,
    type: CompanyNotificationType.REPORT_UPDATED,
  });
};
const approveCampaign = (campaign: Campaign) => {
  allCampaigns.splice(allCampaigns.indexOf(campaign), 1);
  allCampaigns.push({ ...campaign, status: CampaignStatus.COMPLETE });
  notifyAboutApprove(campaign);
};

// --------------------------- ------------------------------------ notifications
const readNotification = (
  notification: Notification,
  newCampaign?: Campaign
) => {
  allNotifications.push({
    ...notification,
    status: NotificationStatus.READ,
    campaign: newCampaign || notification.campaign,
  });
  allNotifications.splice(allNotifications.indexOf(notification), 1);
};

const findAskNotification = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) =>
  allNotifications.filter(
    (n) =>
      n.courier === courier &&
      n.campaign === campaign &&
      n.type ===
        (source === Source.COMPANY
          ? CourierNotificationType.NEW_OFFER
          : CompanyNotificationType.NEW_REQUEST)
  )[0];

const getUnreadCompanyNotificationsCount = (company: Company) =>
  getCompanyNotifications(company).filter(
    (n) =>
      n.status === NotificationStatus.DELIVERED && n.source === Source.COURIER
  ).length;

const getUnreadCourierNotificationsCount = (courier: Courier) =>
  getCourierNotifications(courier).filter(
    (n) => n.status === NotificationStatus.DELIVERED
  ).length;

const notifyAboutAccept = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) => {
  allNotifications.push({
    id: allNotifications.length,
    source,
    courier,
    campaign,
    datetime: moment(),
    status: NotificationStatus.DELIVERED,
    type:
      source === Source.COMPANY
        ? CourierNotificationType.REQUEST_ACCEPTED
        : CompanyNotificationType.OFFER_ACCEPTED,
  });
  const oldNotification = findAskNotification(
    campaign,
    courier,
    source === Source.COMPANY ? Source.COURIER : Source.COMPANY
  );
  readNotification(oldNotification, {
    ...campaign,
    courier,
    status: CampaignStatus.WAITING_FOR_COURIER,
  });
};

const notifyAboutReject = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) => {
  allNotifications.push({
    id: allNotifications.length,
    source,
    courier,
    campaign,
    datetime: moment(),
    status: NotificationStatus.DELIVERED,
    type:
      source === Source.COMPANY
        ? CourierNotificationType.REQUEST_REJECTED
        : CompanyNotificationType.OFFER_REJECTED,
  });
  const oldNotification = findAskNotification(
    campaign,
    courier,
    source === Source.COMPANY ? Source.COURIER : Source.COMPANY
  );
  readNotification(oldNotification);
};

const notifyAboutNewAsk = (
  campaign: Campaign,
  courier: Courier,
  source: Source
) => {
  allNotifications.push({
    id: allNotifications.length,
    source,
    courier,
    campaign,
    datetime: moment(),
    status: NotificationStatus.DELIVERED,
    type:
      source === Source.COMPANY
        ? CourierNotificationType.NEW_OFFER
        : CompanyNotificationType.NEW_REQUEST,
  });
};

const notifyAboutCancel = (campaign: Campaign, source: Source) => {
  if (campaign.courier) {
    allNotifications.push({
      id: allNotifications.length,
      source,
      courier: campaign.courier,
      campaign,
      datetime: moment(),
      status: NotificationStatus.DELIVERED,
      type:
        source === Source.COMPANY
          ? CourierNotificationType.CAMPAIGN_CANCELLED
          : CompanyNotificationType.CAMPAIGN_CANCELLED,
    });
  }
};

const notifyAboutStart = (campaign: Campaign) => {
  if (campaign.courier) {
    allNotifications.push({
      id: allNotifications.length,
      source: Source.COURIER,
      courier: campaign.courier,
      campaign,
      datetime: moment(),
      status: NotificationStatus.DELIVERED,
      type: CompanyNotificationType.CAMPAIGN_START,
    });
  }
};

const notifyAboutChange = (campaign: Campaign) => {
  if (campaign.courier) {
    allNotifications.push({
      id: allNotifications.length,
      source: Source.COMPANY,
      courier: campaign.courier,
      campaign,
      datetime: moment(),
      status: NotificationStatus.DELIVERED,
      type: CourierNotificationType.CAMPAIGN_CHANGED,
    });
  }
};

const notifyAboutApprove = (campaign: Campaign) => {
  if (campaign.courier) {
    allNotifications.push({
      id: allNotifications.length,
      source: Source.COMPANY,
      courier: campaign.courier,
      campaign,
      datetime: moment(),
      status: NotificationStatus.DELIVERED,
      type: CourierNotificationType.CAMPAIGN_APPROVED,
    });
  }
};

// ----------------------------------------------------------------------- chats
const getChat = (company: Company, courier: Courier) => {
  let chat = allChats.filter(
    (c) => c.courier.id === courier.id && c.company.id === company.id
  )[0];
  if (!chat) {
    chat = { id: allChats.length, company, courier };
    allChats.push(chat);
  }
  return chat;
};
const getChatById = (id: string) =>
  allChats.filter((c) => c.id.toString() === id)[0];
const getChatMessages = (chat: Chat) =>
  allMessages.filter((m) => m.chat.id === chat.id);
const readMessage = (message: Message) => {
  allMessages.splice(allMessages.indexOf(message), 1);
  allMessages.push({ ...message, status: MessageStatus.READ });
};
const readMessages = (chat: Chat, source: Source) => {
  getChatMessages(chat)
    .filter((m) => m.source === source)
    .forEach((m) => readMessage(m));
};
const addMessage = (
  body: string,
  company: Company,
  courier: Courier,
  source: Source
) => {
  allMessages.push({
    source,
    body,
    date: moment(),
    status: MessageStatus.SEND,
    chat: getChat(company, courier),
  });
};
const getUnreadCompanyChatCount = (company: Company) =>
  getCompanyChats(company).filter(
    (chat) =>
      !!getUnreadMessages(getChatMessages(chat)).filter(
        (m) => m.source === Source.COURIER
      ).length
  ).length;
const getUnreadCourierChatCount = (courier: Courier) =>
  getCourierChats(courier).filter(
    (chat) =>
      !!getUnreadMessages(getChatMessages(chat)).filter(
        (m) => m.source === Source.COMPANY
      ).length
  ).length;

const setCourierEstimation = (
  courier: Courier,
  estimation: number | undefined
) => {
  const newCourier = {
    ...courier,
    rate: (courier.rate + (estimation || 0)) / 2,
  };
  allCouriers.splice(allCouriers.indexOf(courier), 1);
  allCouriers.push(newCourier);
  const campaigns = getCourierCampaigns(courier);
  campaigns.forEach((c) => {
    if (c.courier) {
      allCampaigns.splice(
        allCampaigns.indexOf(allCampaigns.filter((cc) => cc.id === c.id)[0]),
        1
      );
      allCampaigns.push({
        ...c,
        courier: newCourier,
        courierEstimation: estimation,
      });
    }
  });
};

const setCompanyEstimation = (
  company: Company,
  estimation: number | undefined
) => {
  const newCompany = {
    ...company,
    rate:
      estimation && company.rate
        ? (estimation + company.rate) / 2
        : estimation || company.rate,
  };
  allCompanies.splice(allCompanies.indexOf(company), 1);
  allCompanies.push(newCompany);
  const campaigns = getCompanyCampaigns(company);
  campaigns.forEach((c) => {
    allCampaigns.splice(
      allCampaigns.indexOf(allCampaigns.filter((cc) => cc.id === c.id)[0]),
      1
    );
    allCampaigns.push({
      ...c,
      companyEstimation: estimation,
    });
  });
};

export {
  campaign1,
  campaign2,
  campaign3,
  campaign4,
  campaign5,
  companyLogin,
  courierLogin,
  courier1,
  courier2,
  courier3,
  courier4,
  courier5,
  company1,
  allNotifications,
  allCampaigns,
  allCouriers,
  campaign6,
  getCurrentCompany,
  getCurrentCourier,
  createCampaign,
  getCourierCampaigns,
  getCompanyCampaigns,
  getCompanyChats,
  getCompanyCouriers,
  getCompanyAsks,
  getCompanyNotifications,
  getCourierNotifications,
  getCourierChats,
  getCourierByLogin,
  getCompanyByLogin,
  deleteAsk,
  addAsk,
  readNotification,
  getChat,
  getChatMessages,
  getChatById,
  readMessages,
  addMessage,
  allChats,
  getCampaignById,
  getCampaignAsks,
  getAddressesByCampaign,
  setCampaignAddresses,
  getCampaignAddresses,
  deleteCampaignAddress,
  addPhotosToAddressReport,
  replacePhotosInAddressReport,
  unDoneCampaignAddress,
  sendReportToReview,
  onReportUpdated,
  getUnreadCompanyChatCount,
  getUnreadCourierChatCount,
  getUnreadCompanyNotificationsCount,
  getUnreadCourierNotificationsCount,
  getCompanyAsksCount,
  onAskAccepted,
  onAskRejected,
  onAskCancelled,
  startCampaign,
  cancelCampaign,
  changeCampaign,
  findAskNotification,
  approveCampaign,
  changeCourier,
  setCourierEstimation,
  setCompanyEstimation,
  allCompanies,
  getCompanyById,
  getCourierById,
  changeCompany,
  currentUser,
  allFeedbacks,
};
