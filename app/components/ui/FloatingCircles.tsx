export default function FloatingCircles() {
const circles = [
  // Top left - 32px
 {
  size: 32,
  top: '743px',
  left: '123px',
  innerSize: 10.29,
  innerLeft: '133.86px',
  innerTop: '753.86px',
},
  // Left middle - 56px
 {
  size: 56,
  top: '666.6px',
  left: '297px',
  innerSize: 18,
  innerLeft: '316px',
  innerTop: '685.6px',
},
  // Center - 32px
  {
  size: 32,
  top: '797px',
  left: '840px',
  innerSize: 10.29,
  innerLeft: '850.86px',
  innerTop: '807.86px',
},
  // Bottom right - 37px
{
  size: 37,
  top: '829px',
  left: '1409px',
  innerSize: 11.89,
  innerLeft: '1421.55px',
  innerTop: '841.55px',
},
];
  return (
    <>
      {circles.map((circle, index) => (
        <div key={index}>
          {/* Outer Circle - Ellipse 212 */}
          <div
            className="absolute pointer-events-none hidden lg:block"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: circle.left,
              top: circle.top,
              background: 'rgba(255, 255, 255, 0.2)',
              border: '0.86px solid rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              borderRadius: '42px',
              boxSizing: 'border-box',
            }}
          />

          {/* Inner White Circle - Ellipse 211 */}
          <div
            className="absolute pointer-events-none hidden lg:block"
            style={{
              width: `${circle.innerSize}px`,
              height: `${circle.innerSize}px`,
              left: circle.innerLeft,
              top: circle.innerTop,
              background: '#FFFFFF',
              borderRadius: '50%',
              transform: 'rotate(180deg)',
            }}
          />
        </div>
      ))}
    </>
  );
}