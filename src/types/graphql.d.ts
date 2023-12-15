export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CategoryTable = {
  __typename?: 'CategoryTable';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  section_id: Scalars['Float']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type CollabTable = {
  __typename?: 'CollabTable';
  collab_text: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  notion_link: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type ContactTable = {
  __typename?: 'ContactTable';
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  email_description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  section_id: Scalars['Float']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type HistoryItemTable = {
  __typename?: 'HistoryItemTable';
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  date_type: Scalars['String']['output'];
  end_date?: Maybe<Scalars['String']['output']>;
  history_id: Scalars['Float']['output'];
  history_mode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  start_date?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type HistoryTable = {
  __typename?: 'HistoryTable';
  category_id: Scalars['Float']['output'];
  created_at: Scalars['String']['output'];
  date_type: Scalars['String']['output'];
  end_date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['String']['output'];
  start_date: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type ImageTable = {
  __typename?: 'ImageTable';
  created_at: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  storage_url: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type IntroduceTable = {
  __typename?: 'IntroduceTable';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image_id?: Maybe<Scalars['Float']['output']>;
  intro_text?: Maybe<Scalars['String']['output']>;
  section_id: Scalars['Float']['output'];
  slogan?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type KeywordTable = {
  __typename?: 'KeywordTable';
  category_id: Scalars['Float']['output'];
  created_at: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  main_text?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type ProjectTable = {
  __typename?: 'ProjectTable';
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  date_type: Scalars['String']['output'];
  end_date?: Maybe<Scalars['String']['output']>;
  end_time: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image_id?: Maybe<Scalars['Float']['output']>;
  mode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  section_id: Scalars['Float']['output'];
  start_date?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategory: Array<CategoryTable>;
  getCategoryById: CategoryTable;
  getCategoryBySectionId: Array<CategoryTable>;
  getCategoryByTitle: Array<CategoryTable>;
  getCollab: Array<CollabTable>;
  getContact: Array<ContactTable>;
  getContactById: ContactTable;
  getContactBySectionId: Array<ContactTable>;
  getContactByTitle: Array<ContactTable>;
  getHistories: Array<HistoryTable>;
  getHistoriesByCategoryId: Array<HistoryTable>;
  getHistoriesByTitle: Array<HistoryTable>;
  getHistoryById: HistoryTable;
  getHistoryItem: Array<HistoryItemTable>;
  getHistoryItemByCategoryId: Array<HistoryItemTable>;
  getHistoryItemById: HistoryItemTable;
  getHistoryItemByTitle: Array<HistoryItemTable>;
  getImage: Array<ImageTable>;
  getImageById: ImageTable;
  getImageByName: Array<ImageTable>;
  getIntroduceById: IntroduceTable;
  getIntroduces: Array<IntroduceTable>;
  getIntroducesByCategoryId: Array<IntroduceTable>;
  getKeywordById: KeywordTable;
  getKeywords: Array<KeywordTable>;
  getKeywordsByCategoryId: Array<KeywordTable>;
  getKeywordsByTitle: Array<KeywordTable>;
  getProjectById: ProjectTable;
  getProjectByMainMode: ProjectTable;
  getProjects: Array<ProjectTable>;
  getProjectsByCategoryId: Array<ProjectTable>;
  getProjectsByName: Array<ProjectTable>;
  getSNSById: SnsLinkTable;
  getSNSByName: Array<SnsLinkTable>;
  getSNSByUserId: Array<SnsLinkTable>;
  getSectionById: SectionTable;
  getSectionsByName: Array<SectionTable>;
  getSectionsByUserId: Array<SectionTable>;
  getSkillById: SkillTable;
  getSkills: Array<SkillTable>;
  getSkillsByCategoryId: Array<SkillTable>;
  getSkillsByTitle: Array<SkillTable>;
  getUserById: Array<UserTable>;
  getUsers: Array<UserTable>;
  sayHello: Scalars['String']['output'];
};

export type QueryGetCategoryByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetCategoryBySectionIdArgs = {
  section_id: Scalars['Float']['input'];
};

export type QueryGetCategoryByTitleArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetContactByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetContactBySectionIdArgs = {
  section_id: Scalars['Float']['input'];
};

export type QueryGetContactByTitleArgs = {
  email: Scalars['String']['input'];
};

export type QueryGetHistoriesByCategoryIdArgs = {
  category_id: Scalars['Float']['input'];
};

export type QueryGetHistoriesByTitleArgs = {
  title: Scalars['String']['input'];
};

export type QueryGetHistoryByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetHistoryItemByCategoryIdArgs = {
  history_id: Scalars['Float']['input'];
};

export type QueryGetHistoryItemByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetHistoryItemByTitleArgs = {
  title: Scalars['String']['input'];
};

export type QueryGetImageByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetImageByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetIntroduceByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetIntroducesByCategoryIdArgs = {
  section_id: Scalars['Float']['input'];
};

export type QueryGetKeywordByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetKeywordsByCategoryIdArgs = {
  category_id: Scalars['Float']['input'];
};

export type QueryGetKeywordsByTitleArgs = {
  title: Scalars['String']['input'];
};

export type QueryGetProjectByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetProjectsByCategoryIdArgs = {
  section_id: Scalars['Float']['input'];
};

export type QueryGetProjectsByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetSnsByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetSnsByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetSnsByUserIdArgs = {
  user_id: Scalars['Float']['input'];
};

export type QueryGetSectionByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetSectionsByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetSectionsByUserIdArgs = {
  user_id: Scalars['Float']['input'];
};

export type QueryGetSkillByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetSkillsByCategoryIdArgs = {
  category_id: Scalars['Float']['input'];
};

export type QueryGetSkillsByTitleArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetUserByIdArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SnsLinkTable = {
  __typename?: 'SNSLinkTable';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  user_id: Scalars['Float']['output'];
  visible_status: Scalars['String']['output'];
};

export type SectionTable = {
  __typename?: 'SectionTable';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  user_id: Scalars['Float']['output'];
  visible_status: Scalars['String']['output'];
};

export type SkillTable = {
  __typename?: 'SkillTable';
  category_id: Scalars['Float']['output'];
  created_at: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image_id?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  visible_status: Scalars['String']['output'];
};

export type UserTable = {
  __typename?: 'UserTable';
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image_id?: Maybe<Scalars['Float']['output']>;
  job?: Maybe<Scalars['String']['output']>;
  last_login?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type GetImageByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;

export type GetImageByIdQuery = {
  __typename?: 'Query';
  getImageById: {
    __typename?: 'ImageTable';
    id: string;
    name: string;
    storage_url: string;
    description?: string | null;
  };
};

export type GetSkillsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSkillsQuery = {
  __typename?: 'Query';
  getSkills: Array<{
    __typename?: 'SkillTable';
    id: string;
    name: string;
    description?: string | null;
    visible_status: string;
    created_at: string;
    updated_at: string;
    category_id: number;
    image_id?: number | null;
  }>;
};

export type GetSkillByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;

export type GetSkillByIdQuery = {
  __typename?: 'Query';
  getSkillById: {
    __typename?: 'SkillTable';
    id: string;
    name: string;
    description?: string | null;
    visible_status: string;
    created_at: string;
    updated_at: string;
    category_id: number;
    image_id?: number | null;
  };
};

export type GetSnsByUserIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;

export type GetSnsByUserIdQuery = {
  __typename?: 'Query';
  getSNSByUserId: Array<{
    __typename?: 'SNSLinkTable';
    id: string;
    type: string;
    link: string;
    visible_status: string;
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  getUsers: Array<{
    __typename?: 'UserTable';
    id: string;
    name: string;
    job?: string | null;
    image_id?: number | null;
  }>;
};
