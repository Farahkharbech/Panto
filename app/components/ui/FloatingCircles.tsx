export default function FloatingCircles() {
  const circles = [
    // Left middle - 56px (moved up 30px, left 20px)
    {
      size: 56,
      top: '636.6px',
      left: '267px',
      innerSize: 18,
      innerLeft: '286px',
      innerTop: '655.6px',
    },
    // Top left - 32px (moved up 30px, left 20px)
    {
      size: 32,
      top: '713px',
      left: '83px',
      innerSize: 10.29,
      innerLeft: '93.86px',
      innerTop: '723.86px',
    },
    // Center - 32px (moved up 30px, left 20px)
    {
      size: 32,
      top: '747px',
      left: '770px',
      innerSize: 10.29,
      innerLeft: '780.86px',
      innerTop: '757.86px',
    },
    // Bottom right - 37px (moved up 30px, left 50px)
    {
      size: 37,
      top: '779px',
      left: '1319px',
      innerSize: 11.89,
      innerLeft: '1331.55px',
      innerTop: '791.55px',
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