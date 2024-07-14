import React from 'react';

// CSS-in-JS for Shimmer Effect
const styles = {
  shimmerWrapper: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f6f7f8',
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to right, #f6f7f8 0%, #e2e2e2 20%, #f6f7f8 40%, #f6f7f8 100%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
  },
  card: {
    width: '300px',
    height: '200px',
    margin: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#333',
    position: 'relative',
  },
  cardContent: {
    padding: '20px',
  },
  shimmerContent: {
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    marginBottom: '10px',
  },
};

// Adding keyframes as global CSS
const shimmerKeyframes = `
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;



function Shimmer() {
  return (
    <div style={styles.shimmerWrapper}>
      <div style={styles.shimmer}></div>
    </div>
  );
}

function ShimmerCard() {
  return (
    <div style={styles.card}>
      <Shimmer />
      <div style={styles.cardContent}>
        <div style={{ ...styles.shimmerContent, width: '60%', height: '20px' }}></div>
        <div style={{ ...styles.shimmerContent, width: '80%', height: '20px' }}></div>
        <div style={{ ...styles.shimmerContent, width: '40%', height: '20px' }}></div>
      </div>
    </div>
  );
}

export default function ShimmerList() {
  var shimmerCards = Array.from({ length: 15 }, function(_, index) {
    return <ShimmerCard key={index} />;
  });
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{shimmerCards}</div>;
}


