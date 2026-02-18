"use client";

export default function Background() {
  return (
    <>
      {/* Global Constant Background - Behind All Sections */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Starry Twinkling Background - Constant Across All Sections */}
      <div
        className="fixed inset-0 -z-40"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 55%, white, transparent),
            radial-gradient(2px 2px at 70% 40%, white, transparent),
            radial-gradient(1px 1px at 10% 90%, white, transparent),
            radial-gradient(2px 2px at 45% 15%, white, transparent),
            radial-gradient(1px 1px at 75% 85%, white, transparent),
            radial-gradient(1px 1px at 30% 60%, white, transparent)
          `,
          backgroundSize:
            "200px 200px, 300px 300px, 250px 250px, 350px 350px, 280px 280px, 320px 320px, 400px 400px, 270px 270px, 380px 380px, 290px 290px, 340px 340px, 310px 310px",
          backgroundPosition:
            "0 0, 40px 60px, 130px 270px, 70px 100px, 150px 200px, 200px 50px, 90px 150px, 250px 300px, 180px 220px, 320px 140px, 60px 340px, 280px 80px",
          animation: "twinkle 4s ease-in-out infinite",
          opacity: 0.7,
        }}
      />

      {/* Additional Star Layer for Depth */}
      <div
        className="fixed inset-0 -z-39"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 25% 25%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 65% 55%, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 85% 35%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 40% 75%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 55% 95%, rgba(255,255,255,0.5), transparent)
          `,
          backgroundSize:
            "300px 300px, 400px 400px, 350px 350px, 450px 450px, 380px 380px",
          backgroundPosition:
            "50px 80px, 200px 150px, 350px 50px, 100px 250px, 400px 180px",
          animation: "twinkle 5s ease-in-out infinite reverse",
          opacity: 0.5,
        }}
      />

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }
      `}</style>
    </>
  );
}
