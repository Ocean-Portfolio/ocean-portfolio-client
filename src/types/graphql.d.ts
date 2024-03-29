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

export type HistoryImpactTable = {
  __typename?: 'HistoryImpactTable';
  after: Scalars['String']['output'];
  before: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  history_item_id: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  sort_order: Scalars['Float']['output'];
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
  id: Scalars['ID']['output'];
  impacts: Array<HistoryImpactTable>;
  position?: Maybe<Scalars['String']['output']>;
  sort_order: Scalars['Float']['output'];
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
  end_time: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sort_order: Scalars['Float']['output'];
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
  image_id?: Maybe<Scalars['Float']['output']>;
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
  mockup?: Maybe<Scalars['String']['output']>;
  mode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  section_id: Scalars['Float']['output'];
  sort_order: Scalars['Float']['output'];
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
  getContactByCategoryId: ContactTable;
  getContactById: ContactTable;
  getContactBySectionId: ContactTable;
  getContactByTitle: Array<ContactTable>;
  getHistories: Array<HistoryTable>;
  getHistoriesByCategoryId: Array<HistoryTable>;
  getHistoriesByTitle: Array<HistoryTable>;
  getHistoryById: HistoryTable;
  getHistoryImpact: Array<HistoryImpactTable>;
  getHistoryImpactByHistoryItemId: Array<HistoryImpactTable>;
  getHistoryImpactById: HistoryImpactTable;
  getHistoryItem: Array<HistoryItemTable>;
  getHistoryItemByHistoryId: Array<HistoryItemTable>;
  getHistoryItemById: HistoryItemTable;
  getHistoryItemByTitle: Array<HistoryItemTable>;
  getImage: Array<ImageTable>;
  getImageById: ImageTable;
  getImageByName: Array<ImageTable>;
  getIntroduceById: IntroduceTable;
  getIntroduces: Array<IntroduceTable>;
  getIntroducesBySectionId: IntroduceTable;
  getKeywordById: KeywordTable;
  getKeywords: Array<KeywordTable>;
  getKeywordsByCategoryId: KeywordTable;
  getKeywordsByTitle: Array<KeywordTable>;
  getProjectById: ProjectTable;
  getProjectByMainMode: ProjectTable;
  getProjects: Array<ProjectTable>;
  getProjectsByName: Array<ProjectTable>;
  getProjectsBySectionId: Array<ProjectTable>;
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
  getUserByName: UserTable;
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

export type QueryGetContactByCategoryIdArgs = {
  category_id: Scalars['Float']['input'];
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

export type QueryGetHistoryImpactByHistoryItemIdArgs = {
  history_item_id: Scalars['Float']['input'];
};

export type QueryGetHistoryImpactByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryGetHistoryItemByHistoryIdArgs = {
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

export type QueryGetIntroducesBySectionIdArgs = {
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

export type QueryGetProjectsByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryGetProjectsBySectionIdArgs = {
  section_id: Scalars['Float']['input'];
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

export type QueryGetUserByNameArgs = {
  name: Scalars['String']['input'];
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
  section_type: Scalars['String']['output'];
  sort_order: Scalars['Float']['output'];
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
  sort_order: Scalars['Float']['output'];
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

export type GetCategoryBySectionIdQueryVariables = Exact<{
  section_id: Scalars['Float']['input'];
}>;

export type GetCategoryBySectionIdQuery = {
  __typename?: 'Query';
  getCategoryBySectionId: Array<{
    __typename?: 'CategoryTable';
    id: string;
    name: string;
    visible_status: string;
  }>;
};

export type GetContactBySectionIdQueryVariables = Exact<{
  section_id: Scalars['Float']['input'];
}>;

export type GetContactBySectionIdQuery = {
  __typename?: 'Query';
  getContactBySectionId: {
    __typename?: 'ContactTable';
    id: string;
    email: string;
    email_description?: string | null;
    visible_status: string;
    section_id: number;
  };
};

export type GetHistoriesByCategoryIdQueryVariables = Exact<{
  category_id: Scalars['Float']['input'];
}>;

export type GetHistoriesByCategoryIdQuery = {
  __typename?: 'Query';
  getHistoriesByCategoryId: Array<{
    __typename?: 'HistoryTable';
    id: string;
    sort_order: number;
    title: string;
    date_type: string;
    end_time: string;
    start_date: string;
    end_date: string;
    visible_status: string;
  }>;
};

export type GetHistoryItemByHistoryIdQueryVariables = Exact<{
  history_id: Scalars['Float']['input'];
}>;

export type GetHistoryItemByHistoryIdQuery = {
  __typename?: 'Query';
  getHistoryItemByHistoryId: Array<{
    __typename?: 'HistoryItemTable';
    id: string;
    sort_order: number;
    title: string;
    position?: string | null;
    content?: string | null;
    date_type: string;
    start_date?: string | null;
    end_date?: string | null;
    visible_status: string;
    impacts: Array<{
      __typename?: 'HistoryImpactTable';
      id: string;
      sort_order: number;
      before: string;
      after: string;
      content?: string | null;
      visible_status: string;
    }>;
  }>;
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

export type GetIntroducesBySectionIdQueryVariables = Exact<{
  section_id: Scalars['Float']['input'];
}>;

export type GetIntroducesBySectionIdQuery = {
  __typename?: 'Query';
  getIntroducesBySectionId: {
    __typename?: 'IntroduceTable';
    id: string;
    slogan?: string | null;
    intro_text?: string | null;
    visible_status: string;
    image_id?: number | null;
  };
};

export type GetKeywordsByCategoryIdQueryVariables = Exact<{
  category_id: Scalars['Float']['input'];
}>;

export type GetKeywordsByCategoryIdQuery = {
  __typename?: 'Query';
  getKeywordsByCategoryId: {
    __typename?: 'KeywordTable';
    id: string;
    main_text?: string | null;
    description?: string | null;
    visible_status: string;
    image_id?: number | null;
  };
};

export type GetProjectsBySectionIdQueryVariables = Exact<{
  section_id: Scalars['Float']['input'];
}>;

export type GetProjectsBySectionIdQuery = {
  __typename?: 'Query';
  getProjectsBySectionId: Array<{
    __typename?: 'ProjectTable';
    id: string;
    mode: string;
    name: string;
    content?: string | null;
    date_type: string;
    end_time: string;
    start_date?: string | null;
    end_date?: string | null;
    mockup?: string | null;
    image_id?: number | null;
  }>;
};

export type GetSectionsByUserIdQueryVariables = Exact<{
  user_id: Scalars['Float']['input'];
}>;

export type GetSectionsByUserIdQuery = {
  __typename?: 'Query';
  getSectionsByUserId: Array<{
    __typename?: 'SectionTable';
    id: string;
    name: string;
    sort_order: number;
    section_type: string;
  }>;
};

export type GetSkillsByCategoryIdQueryVariables = Exact<{
  category_id: Scalars['Float']['input'];
}>;

export type GetSkillsByCategoryIdQuery = {
  __typename?: 'Query';
  getSkillsByCategoryId: Array<{
    __typename?: 'SkillTable';
    id: string;
    sort_order: number;
    name: string;
    description?: string | null;
    visible_status: string;
    updated_at: string;
    category_id: number;
    image_id?: number | null;
  }>;
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

export type GetUserByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type GetUserByNameQuery = {
  __typename?: 'Query';
  getUserByName: {
    __typename?: 'UserTable';
    id: string;
    name: string;
    email: string;
    job?: string | null;
    image_id?: number | null;
  };
};
