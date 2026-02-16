"use client";

export default function Background() {
  return (
    <>
      {/* Global Background */}
      <div className="fixed inset-0 bg-black -z-50" />
      <div
        className="fixed inset-0 opacity-60 -z-40 animate-pulse"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 55%, white, transparent),
            radial-gradient(2px 2px at 70% 40%, white, transparent)
          `,
          backgroundSize:
            "200px 200px, 300px 300px, 250px 250px, 350px 350px, 280px 280px, 320px 320px, 400px 400px, 270px 270px",
          backgroundPosition:
            "0 0, 40px 60px, 130px 270px, 70px 100px, 150px 200px, 200px 50px, 90px 150px, 250px 300px",
          animation: "twinkle 3s ease-in-out infinite",
        }}
      />

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}
