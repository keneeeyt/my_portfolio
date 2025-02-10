import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    user_avatar: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    user_position: {
      type: String,
      required: true,
    },
    user_testimonial: {
      type: String,
      required: true,
    },
    user_html_url: {
      type: String,
      required: true,
    },
    user_login: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);

export default Testimonial;
