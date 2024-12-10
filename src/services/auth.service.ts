import { AxiosResponse } from 'axios';

import $api from '@/services/api';
import { AuthResponse } from '@/types/AuthResponse';
import {
  AuthLoginParams,
  AuthRegistrationParams,
} from '@/redux/auth/auth.types';

export default class AuthService {
  static async login(
    params: AuthLoginParams
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('api/auth/login', params);
  }

  static async registration(
    params: AuthRegistrationParams
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('api/auth/registration', params);
  }

  static async logout(): Promise<void> {
    return $api.get('api/auth/logout');
  }

  static async refresh(): Promise<AxiosResponse<{ accessToken: string }>> {
    return $api.get('api/auth/refresh');
  }
}
