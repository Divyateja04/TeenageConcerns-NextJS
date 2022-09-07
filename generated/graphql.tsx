import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type MeReturn = {
  __typename?: 'MeReturn';
  mentorId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
};

export type Mentor = {
  __typename?: 'Mentor';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  noOfUsers: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};

export type MentorReturn = {
  __typename?: 'MentorReturn';
  errors?: Maybe<Array<ErrorType>>;
  mentor?: Maybe<Mentor>;
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  mentorLogin: MentorReturn;
  mentorLogout: Scalars['Boolean'];
  mentorRegister: MentorReturn;
  sendMessage: Scalars['String'];
  userCreate: UserReturn;
  userDelete: Scalars['Boolean'];
  userLogin: UserReturn;
};


export type MutationMentorLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMentorRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSendMessageArgs = {
  channel: Scalars['String'];
  message: Scalars['String'];
};


export type MutationUserDeleteArgs = {
  uuid: Scalars['String'];
};


export type MutationUserLoginArgs = {
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  whoAmI?: Maybe<MeReturn>;
};

export type Subscription = {
  __typename?: 'Subscription';
  receiveMessage: MessagePayload;
};


export type SubscriptionReceiveMessageArgs = {
  topic: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  mentor: Mentor;
  mentorId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  uuid: Scalars['String'];
};

export type UserReturn = {
  __typename?: 'UserReturn';
  errors?: Maybe<Array<ErrorType>>;
  user?: Maybe<User>;
};

export type MentorLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type MentorLoginMutation = { __typename?: 'Mutation', mentorLogin: { __typename?: 'MentorReturn', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null, mentor?: { __typename?: 'Mentor', id: number, name: string, email: string, updatedAt: any, createdAt: any, noOfUsers: number } | null } };

export type MentorLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type MentorLogoutMutation = { __typename?: 'Mutation', mentorLogout: boolean };

export type MentorRegistrationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type MentorRegistrationMutation = { __typename?: 'Mutation', mentorRegister: { __typename?: 'MentorReturn', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null, mentor?: { __typename?: 'Mentor', id: number, name: string, email: string, updatedAt: any, createdAt: any, noOfUsers: number } | null } };

export type SendMessageMutationVariables = Exact<{
  message: Scalars['String'];
  channel: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: string };

export type UserDeleteMutationVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type UserDeleteMutation = { __typename?: 'Mutation', userDelete: boolean };

export type UserLoginMutationVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserReturn', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null, user?: { __typename?: 'User', createdAt: any, id: number, mentorId: number, uuid: string, updatedAt: any, mentor: { __typename?: 'Mentor', createdAt: any, email: string, id: number, noOfUsers: number, updatedAt: any } } | null } };

export type CreateUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateUserMutation = { __typename?: 'Mutation', userCreate: { __typename?: 'UserReturn', errors?: Array<{ __typename?: 'ErrorType', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, uuid: string, mentorId: number, createdAt: any, updatedAt: any, mentor: { __typename?: 'Mentor', id: number, email: string, noOfUsers: number, updatedAt: any, createdAt: any } } | null } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', whoAmI?: { __typename?: 'MeReturn', userId?: string | null, mentorId?: number | null } | null };

export type ReceiveMessageSubscriptionVariables = Exact<{
  topic: Scalars['String'];
}>;


export type ReceiveMessageSubscription = { __typename?: 'Subscription', receiveMessage: { __typename?: 'MessagePayload', message: string } };


export const MentorLoginDocument = gql`
    mutation MentorLogin($email: String!, $password: String!) {
  mentorLogin(email: $email, password: $password) {
    errors {
      field
      message
    }
    mentor {
      id
      name
      email
      updatedAt
      createdAt
      noOfUsers
    }
  }
}
    `;

export function useMentorLoginMutation() {
  return Urql.useMutation<MentorLoginMutation, MentorLoginMutationVariables>(MentorLoginDocument);
};
export const MentorLogoutDocument = gql`
    mutation MentorLogout {
  mentorLogout
}
    `;

export function useMentorLogoutMutation() {
  return Urql.useMutation<MentorLogoutMutation, MentorLogoutMutationVariables>(MentorLogoutDocument);
};
export const MentorRegistrationDocument = gql`
    mutation MentorRegistration($email: String!, $password: String!, $name: String!) {
  mentorRegister(email: $email, password: $password, name: $name) {
    errors {
      field
      message
    }
    mentor {
      id
      name
      email
      updatedAt
      createdAt
      noOfUsers
    }
  }
}
    `;

export function useMentorRegistrationMutation() {
  return Urql.useMutation<MentorRegistrationMutation, MentorRegistrationMutationVariables>(MentorRegistrationDocument);
};
export const SendMessageDocument = gql`
    mutation SendMessage($message: String!, $channel: String!) {
  sendMessage(message: $message, channel: $channel)
}
    `;

export function useSendMessageMutation() {
  return Urql.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument);
};
export const UserDeleteDocument = gql`
    mutation UserDelete($uuid: String!) {
  userDelete(uuid: $uuid)
}
    `;

export function useUserDeleteMutation() {
  return Urql.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(UserDeleteDocument);
};
export const UserLoginDocument = gql`
    mutation UserLogin($uuid: String!) {
  userLogin(uuid: $uuid) {
    errors {
      field
      message
    }
    user {
      createdAt
      id
      mentor {
        createdAt
        email
        id
        noOfUsers
        updatedAt
      }
      mentorId
      uuid
      updatedAt
    }
  }
}
    `;

export function useUserLoginMutation() {
  return Urql.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser {
  userCreate {
    errors {
      field
      message
    }
    user {
      id
      uuid
      mentorId
      mentor {
        id
        email
        noOfUsers
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const Document = gql`
    {
  whoAmI {
    userId
    mentorId
  }
}
    `;

export function useQuery(options?: Omit<Urql.UseQueryArgs<QueryVariables>, 'query'>) {
  return Urql.useQuery<Query, QueryVariables>({ query: Document, ...options });
};
export const ReceiveMessageDocument = gql`
    subscription ReceiveMessage($topic: String!) {
  receiveMessage(topic: $topic) {
    message
  }
}
    `;

export function useReceiveMessageSubscription<TData = ReceiveMessageSubscription>(options: Omit<Urql.UseSubscriptionArgs<ReceiveMessageSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<ReceiveMessageSubscription, TData>) {
  return Urql.useSubscription<ReceiveMessageSubscription, TData, ReceiveMessageSubscriptionVariables>({ query: ReceiveMessageDocument, ...options }, handler);
};