/**
 * NYA Admin Dashboard
 * Manage hero images, leadership team, and site settings
 */
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your NYA website content and settings</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hero">Hero Images</TabsTrigger>
            <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
            <TabsTrigger value="settings">Site Settings</TabsTrigger>
          </TabsList>

          {/* Hero Images Tab */}
          <TabsContent value="hero" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Hero Carousel Images</CardTitle>
                <CardDescription>
                  Manage the images displayed in the hero section carousel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-sm mb-2">Current Hero Images</h3>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li>1. Professional team photo (WhatsAppImage2026-05-17at13.32.13.jpeg)</li>
                      <li>2. Community service image</li>
                      <li>3. Leadership development image</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    Hero image management coming soon. You will be able to upload, reorder, and delete carousel images.
                  </p>
                  <Button disabled>Upload New Image</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leadership Team Tab */}
          <TabsContent value="leadership" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Leadership Team Members</CardTitle>
                <CardDescription>
                  Add, edit, or remove team members from the leadership section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-sm mb-2">Current Team Members</h3>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• James Kipchoge - Chairperson</li>
                      <li>• Sarah Koech - Vice Chairperson</li>
                      <li>• David Kiplagat - Secretary General</li>
                      <li>• Grace Mutai - Treasurer</li>
                      <li>• Peter Rotich - Communications Officer</li>
                      <li>• Mary Kipchoge - Programs Director</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    Leadership team management coming soon. You will be able to add, edit, and remove team members with photos and credentials.
                  </p>
                  <Button disabled>Add Team Member</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Site Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
                <CardDescription>
                  Update contact information and social media links
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="nandiyouthassembly@gmail.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="0758 147 727"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Social Media Links</label>
                    <input
                      type="text"
                      placeholder="Facebook URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled
                    />
                    <input
                      type="text"
                      placeholder="Twitter URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled
                    />
                    <input
                      type="text"
                      placeholder="Instagram URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled
                    />
                    <input
                      type="text"
                      placeholder="TikTok URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled
                    />
                  </div>
                  <Button disabled>Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Info Box */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-base">Deployment & Access</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <div>
              <strong>Current Domain:</strong>
              <div className="bg-white px-3 py-2 rounded mt-1 font-mono text-xs">
                nyassembly-wdk2vuhb.manus.space
              </div>
            </div>
            <div>
              <strong>Admin Access:</strong>
              <p className="mt-1">This admin dashboard is accessible at <code className="bg-white px-2 py-1 rounded">/admin</code> path. Full database management features will be enabled after backend integration.</p>
            </div>
            <div>
              <strong>Deploy to Other Sites:</strong>
              <p className="mt-1">To deploy this website to your own hosting, use the Export feature in the Management UI to download the complete source code, or contact support for deployment assistance.</p>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="mt-8">
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
