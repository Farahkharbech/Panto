export default function FloatingCircles() {
  const circles = [
    // Bottom right - 37px
    {
      size: 37,
      top: '809px',
      left: '1369px',
      innerSize: 11.89,
      innerLeft: '1381.55px',
      innerTop: '821.55px',
    },
    // Center - 32px
    {
      size: 32,
      top: '777px',
      left: '800px',
      innerSize: 10.29,
      innerLeft: '810.86px',
      innerTop: '787.86px',
    },
    // Top left - 32px
    {
      size: 32,
      top: '743px',
      left: '103px',
      innerSize: 10.29,
      innerLeft: '113.86px',
      innerTop: '753.86px',
    },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <div key={index}>
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