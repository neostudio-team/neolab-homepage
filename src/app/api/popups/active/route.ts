import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("popups")
      .where("isActive", "==", true)
      .get();
      
    const now = Date.now();

    const activePopups = snapshot.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      .filter((p: any) => {
        if (p.startDate) {
          const start = new Date(p.startDate.includes("+") ? p.startDate : p.startDate + "+09:00").getTime();
          if (start > now) return false;
        }
        if (p.endDate) {
          const end = new Date(p.endDate.includes("+") ? p.endDate : p.endDate + "+09:00").getTime();
          if (end < now) return false;
        }
        return true;
      });

    return NextResponse.json(activePopups);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch active popups" }, { status: 500 });
  }
}
