import { makeInstaller } from '@some-vue-component/utils/install.ts';
import components from './components.ts';

export * from '@some-vue-component/components'
export default makeInstaller(components)