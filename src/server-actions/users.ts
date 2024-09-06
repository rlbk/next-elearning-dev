"use server";
import User from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";

export const SaveCurrentUserToDB = async () => {
  try {
    const clerkUserDetails = await currentUser();
    const dbUserPayload = {
      name: clerkUserDetails?.fullName,
      email: clerkUserDetails?.emailAddresses[0].emailAddress,
      clerkUserId: clerkUserDetails?.id,
      profilePic: clerkUserDetails?.imageUrl,
      isAdmin: false,
      isActive: true,
    };

    const newUser = new User(dbUserPayload);
    await newUser.save();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const GetCurrentUser = async () => {
  try {
    const clerkUserDetails = await currentUser();
    const user = await User.findOne({ clerkUserId: clerkUserDetails?.id });
    if (user)
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    const saveNewUser = await SaveCurrentUserToDB();
    if (saveNewUser.success) return { success: true, data: saveNewUser.data };
    return { success: false, message: "User not found in db" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
