export const Routes = {
  HOME: `/`,
  NOT_FOUND: `/404`,
  //
  FORUM: `/forum`,
  FORUM_SUBJECT: (id: string) => `/forum/${id}`,
  //
  FRIENDS_LIST: '/friends',
  //
  LOGIN: `/login`,
  //
  MATCHES_LIST: '/matches',
  MATCHES_DETAIL: (id: string) => `/matches/${id}`,
  MATCHES_ADD: '/matches/add',
  //
  MEDIA_LIST: '/media',
  //
  NEWS_LIST: `/news`,
  NEWS_DETAIL: (id: string) => `/news/${id}`,
  NEWS_CREATE: `/news/create`,
  //
  NOTIFICATIONS_LIST: `/notifications`,
  NOTIFICATIONS_DETAIL: (id: string) => `/notifications/${id}`,
  //
  PLAYERS_LIST: `/players`,
  //
  PROFILE: `/profile`,
  PROFILE_EDIT: `/profile/edit`,
  //
  STREAMS_LIST: `/streams`,
  STREAMS_DETAIL: (id: string) => `/streams/${id}`,
  //
  TEAMS_LIST: '/teams',
  TEAMS_CREATE: '/teams/create',
  //
  TOURNAMENTS_LIST: `/tournaments`,
  TOURNAMENTS_DETAIL: (id: string) => `/tournaments/${id}`,
};
