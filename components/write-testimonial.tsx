"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  Fragment,
} from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { IconBrandGithub } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/animated-input";
import { Textarea } from "@/components/ui/animated-textarea";
import { toast } from "sonner";
import axios from "axios";
import Image from "next/image";

const WriteTestimonial = ({
  getData,
  setUserData,
}: {
  getData?: () => void;
  setUserData?: (data: any) => void; // eslint-disable-line
}) => {
  
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>(() => { // eslint-disable-line
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("user_details");
      return storedData ? JSON.parse(storedData) : null;
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [position, setPosition] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const isEffectExecuted = useRef(false); // Prevent re-execution

  const signInGithub = useCallback(() => {
    setIsLoading(true);
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
    );
  }, []);

  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById("testimonials");
    const openTestimonialModal = document.getElementById("testimonial-modal");
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: "smooth" });
      setIsLoading(true);
      setTimeout(() => {
        openTestimonialModal?.click();
      }, 1000);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("user_details");
    setIsAuth(false);
    toast.success("Logged out successfully!");
    getData && getData(); // eslint-disable-line
    setUserData && setUserData(null); // eslint-disable-line
  };

  useEffect(() => {
    if (isEffectExecuted.current) return; // Prevent re-execution
    isEffectExecuted.current = true;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    const userDetails = localStorage.getItem("user_details");

    if (!userDetails && codeParam) {
      //  scroll to #testimonials section
      scrollToTestimonials();

      const getUserData = async () => {
        try {
          const res = await fetch(`/api/github/access-token?code=${codeParam}`);
          const data = await res.json();

          if (data.data) {
            localStorage.setItem("user_details", JSON.stringify(data.data));
            setUserDetails(data.data);
            setUserData && setUserData(data.data); // eslint-disable-line
            setIsAuth(true);

            // delete the code param from the URL parameters
            const url = new URL(window.location.href);
            url.searchParams.delete("code");
            window.history.replaceState({}, document.title, url.toString());
          }
          toast.success("Logged in successfully!");
          getData?.();
        } catch (error) {
          console.error("Failed to fetch user data", error);
          toast.error("Something went wrong, please try again later!");
        } finally {
          setIsLoading(false);
        }
      };

      getUserData();
    } else {
      setIsAuth(!!userDetails); // Convert to boolean
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem("user_details", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  const onSubmit = async () => {
    if (!testimonial) {
      return toast.error("Testimonial field is required!");
    }
    if (!position) {
      return toast.error("Position field is required!");
    }

    const userDetails = localStorage.getItem("user_details");
    if (!userDetails) {
      return toast.error("User details not found. Please sign in.");
    }

    const user = JSON.parse(userDetails);

    const formData = {
      user_avatar: user.user_avatar,
      user_name: user.user_name,
      user_id: user.user_id,
      user_position: position,
      user_testimonial: testimonial,
      user_html_url: user.user_html_url,
      user_login: user.user_login,
    };

    setSubmitLoading(true); // Start loading state

    try {
      const { status } = await axios.post("/api/testimonial", formData);

      if (status === 200) {
        toast.success("Testimonial created successfully!");
        setTestimonial("");
        setPosition("");
        getData && getData(); // eslint-disable-line
      } else {
        toast.error("Unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Failed to create testimonial:", error);
      toast.error("Failed to create testimonial. Please try again later.");
    } finally {
      setSubmitLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <div className="mb-12 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent dark:text-white border dark:border-white/[0.2] border-dashed text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Write a Testimonial
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✍🏽
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            {isAuth ? (
              <>
                <div className="flex items-center justify-start">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={userDetails?.user_avatar}
                    alt={userDetails?.user_name}
                    width={48}
                    height={48}
                  />
                  <p className="text-lg font-bold ml-4">
                    Hey there! {userDetails?.user_login}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col space-y-5 mb-4 mt-5">
                    <LabelInputContainer>
                      <Textarea
                        value={testimonial}
                        id="testimonial"
                        placeholder="Write your testimonial here..."
                        onChange={(e) => setTestimonial(e.target.value)}
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Input
                        value={position}
                        id="designation"
                        placeholder="Write your designation here... Ex: Software Engineer, etc.."
                        type="text"
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </LabelInputContainer>
                  </div>
                </div>
              </>
            ) : (
              <Fragment>
                <button
                  onClick={signInGithub}
                  className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-black-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-neutral-800 dark:text-neutral-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Sign in with GitHub
                      </span>
                    </>
                  )}
                  <BottomGradient />
                </button>
                {isLoading ? (
                  <p className="relative text-center mt-10 text-gray-400">
                    Signing in please wait...
                  </p>
                ) : (
                  <p className="relative text-center mt-10 text-gray-400">
                    Kindly log in to your account to continue sharing your
                    valuable testimonial. Your feedback is greatly appreciated.
                  </p>
                )}
              </Fragment>
            )}
          </ModalContent>
          {isAuth && (
            <ModalFooter className="gap-4">
              <button
                onClick={() => logoutUser()}
                className="relative group/btn px-4 border border-dashed text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-black-100"
              >
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Logout
                </span>
                <BottomGradient />
              </button>
              <button
                onClick={onSubmit}
                className="relative group/btn px-4 border border-dashed text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-black-100"
              >
                {submitLoading ? (
                  <div className="px-11">
                    <svg
                      className="animate-spin h-5 w-5 text-neutral-800 dark:text-neutral-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Post testimonial
                  </span>
                )}

                <BottomGradient />
              </button>
            </ModalFooter>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default WriteTestimonial;
