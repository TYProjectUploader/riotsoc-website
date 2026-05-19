export type RubricEvent = {
  eventid: number;
  title: string;
  formatteddate: string;
  subtitle: string;
  image: string;
  info: string;
  destination: string;
  upcoming: number;
};

export interface RubricSection {
  sectionname: string;
  array: RubricEvent[];
}

export interface RubricApiResponse {
  sections: RubricSection[];
}

export type RubricEventDetails = {
  eventId: number;
  eventName: string;
  eventEndTime: string;
  bannerImageURL: string;
  hasBannerImage: boolean;
  eventDescription: string;
};
