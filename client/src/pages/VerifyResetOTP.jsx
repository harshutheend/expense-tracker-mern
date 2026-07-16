import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function VerifyResetOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      return toast.error("Please enter a valid 6-digit OTP");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/verify-reset-otp", {
        email,
        otp,
      });

      toast.success(res.data.message);

      navigate("/reset-password", {
        state: {
          email,
          otp,
        },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Verify OTP</h1>

        <p className="text-gray-500 text-center mb-8">
          Enter the OTP sent to
          <br />
          <b>{email}</b>
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="w-full border rounded-lg p-3 text-center text-2xl tracking-[10px]"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyResetOTP;
