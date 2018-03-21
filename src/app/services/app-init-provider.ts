import { reject } from 'q';
import { AuthorizationService } from './authorization.service';
import { User } from '../common/types/User';
import { StorageService } from './storage.service';
import { UserStoreService } from '../stores/user-store.service';
import { StorageKey } from '../common/constants/storage-constants';

export function setupUser(storageService: StorageService,
  authService: AuthorizationService,
  userStore: UserStoreService): () => Promise<User> {
  return (): Promise<User> => {
    return new Promise<User>((resolve, error) => {
      const userStr: string = storageService.get(StorageKey.USER);
      let userObj: User = null;
      if (userStr) {
        userObj = JSON.parse(userStr);
        console.log(userObj);
        userStore.setUser(userObj);
      }
      return resolve(userObj);
    });
  };
}
