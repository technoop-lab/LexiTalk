import { ISpeechRecognitionProvider } from '../../types/conversation';
import { OnDeviceAndroidSpeechProvider } from './OnDeviceAndroidSpeechProvider';
import { MockDevSpeechProvider } from './MockDevSpeechProvider';

export class SpeechService {
  private static realProvider: ISpeechRecognitionProvider = new OnDeviceAndroidSpeechProvider();
  private static mockProvider: MockDevSpeechProvider = new MockDevSpeechProvider();
  private static useMock = false;

  public static getProvider(): ISpeechRecognitionProvider {
    if (this.useMock) {
      return this.mockProvider;
    }
    return this.realProvider;
  }

  public static getMockDevProvider(): MockDevSpeechProvider {
    return this.mockProvider;
  }

  public static setUseMockProvider(useMock: boolean) {
    this.useMock = useMock;
  }

  public static isUsingMock(): boolean {
    return this.useMock;
  }
}
