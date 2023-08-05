import type {ColorValue, HostComponent, ViewProps} from 'react-native';
import type {Double} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

export interface ConicGradientViewProps extends ViewProps {
  colors: ReadonlyArray<ColorValue>;
  locations: ReadonlyArray<Double>;
  centerPoint?: Readonly<{x: Double; y: Double}>;
}

export type ConicGradientViewComponent = HostComponent<ConicGradientViewProps>;

export default codegenNativeComponent<ConicGradientViewProps>(
  'ConicGradientView',
) as ConicGradientViewComponent;
