import { TitleCasePipe } from './title-case.pipe';

describe('CamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
