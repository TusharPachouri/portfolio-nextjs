import { Stars as DreiStars } from '@react-three/drei';

export function Stars(props: { radius?: number; depth?: number; count?: number; factor?: number; saturation?: number }) {
  const { radius = 300, depth = 60, count = 20000, factor = 7, saturation = 0 } = props;

  return (
    <DreiStars
      radius={radius}
      depth={depth}
      count={count}
      factor={factor}
      saturation={saturation}
    />
  );
}
