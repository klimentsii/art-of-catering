export const animations: Animations = {
  left: {
    property: 'transform',
    startValue: 'translateX(-50px)',
    endValue: 'translateX(0)',
  },
  top: {
    property: 'transform',
    startValue: 'translateY(-50px)',
    endValue: 'translateY(0)',
  },
  right: {
    property: 'transform',
    startValue: 'translateX(50px)',
    endValue: 'translateX(0)',
  },
  bottom: {
    property: 'transform',
    startValue: 'translateY(50px)',
    endValue: 'translateY(0)',
  }
}

export interface AnimationModel {
  property: string;
  startValue: string;
  endValue: string;
}

export interface Animations {
  left: AnimationModel;
  top: AnimationModel;
  right: AnimationModel;
  bottom: AnimationModel;
}
