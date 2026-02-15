// Video controller - Jitsi Meet is used for video calls (no backend token needed)
// Jitsi Meet is open source and free - video rooms are created client-side

const getVideoStatus = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Jitsi Meet is used for video calls - no backend token needed",
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export { getVideoStatus };
