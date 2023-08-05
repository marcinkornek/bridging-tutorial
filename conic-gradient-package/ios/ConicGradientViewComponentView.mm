#if RCT_NEW_ARCH_ENABLED
#import "ConicGradientViewComponentView.h"

#import <React/RCTConversions.h>
#import <RCTTypeSafety/RCTConvertHelpers.h>

#import <react/renderer/components/ConicGradientPackage/ComponentDescriptors.h>
#import <react/renderer/components/ConicGradientPackage/EventEmitters.h>
#import <react/renderer/components/ConicGradientPackage/Props.h>
#import <react/renderer/components/ConicGradientPackage/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface ConicGradientViewComponentView () <RCTConicGradientViewViewProtocol>
@end

@implementation ConicGradientViewComponentView

@dynamic layer;

+ (Class)layerClass
{
    return [CAGradientLayer classForCoder];
}

- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const ConicGradientViewProps>();
        _props = defaultProps;
        
        self.layer.type = kCAGradientLayerConic;
        self.layer.needsDisplayOnBoundsChange = YES;
    }

    return self;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<ConicGradientViewComponentDescriptor>();
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<const ConicGradientViewProps>(_props);
    const auto &newViewProps = *std::static_pointer_cast<const ConicGradientViewProps>(props);

    if (oldViewProps.colors != newViewProps.colors) {
        auto colors = RCTConvertVecToArray(newViewProps.colors, ^id(SharedColor item){
            return (id)RCTUIColorFromSharedColor(item).CGColor;
        });
        self.layer.colors = colors;
    }

    if (oldViewProps.locations != newViewProps.locations) {
        auto locations = RCTConvertVecToArray(newViewProps.locations, ^id(double item){
            return @(item);
        });
        self.layer.locations = locations;
    }

    if (oldViewProps.centerPoint.x != newViewProps.centerPoint.x || oldViewProps.centerPoint.y != newViewProps.centerPoint.y) {
        auto centerPoint = CGPointMake(newViewProps.centerPoint.x, newViewProps.centerPoint.y);
        self.layer.startPoint = centerPoint;
        self.layer.endPoint = CGPointMake(1, centerPoint.y);
    }

    [super updateProps:props oldProps:oldProps];
}

@end

Class<RCTComponentViewProtocol> ConicGradientViewCls(void)
{
    return ConicGradientViewComponentView.class;
}
#endif
