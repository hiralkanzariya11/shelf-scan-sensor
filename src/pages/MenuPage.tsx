
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Utensils, Pizza, Salad, Coffee } from 'lucide-react';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Menu Planning</h1>
          <Button>
            <Utensils className="mr-2 h-4 w-4" />
            Create New Menu
          </Button>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly Menu</TabsTrigger>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <Card key={day}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{day}</CardTitle>
                    <CardDescription>Menu items for {day}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Pizza className="h-4 w-4 text-muted-foreground" />
                      <span>Margherita Pizza</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Salad className="h-4 w-4 text-muted-foreground" />
                      <span>Caesar Salad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-muted-foreground" />
                      <span>Coffee & Dessert</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Edit Menu
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recipes" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Margherita Pizza', 'Caesar Salad', 'Butter Chicken', 'Pasta Carbonara'].map((recipe) => (
                <Card key={recipe}>
                  <CardHeader>
                    <CardTitle>{recipe}</CardTitle>
                    <CardDescription>Recipe details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <Label>Ingredients</Label>
                        <div className="text-sm text-muted-foreground">
                          Key ingredients for {recipe.toLowerCase()}
                        </div>
                      </div>
                      <div>
                        <Label>Preparation Time</Label>
                        <div className="text-sm text-muted-foreground">30 minutes</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">View</Button>
                    <Button size="sm">Add to Menu</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="suggestions" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Menu Suggestions</CardTitle>
                <CardDescription>
                  Based on your inventory and popular dishes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="suggestions">What would you like to cook?</Label>
                    <div className="flex gap-2 mt-1">
                      <Input id="suggestions" placeholder="Enter ingredients or dish name" />
                      <Button>Get Ideas</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Suggested Menu Items</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Utensils className="h-4 w-4" />
                        <span>Butter Chicken with Naan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Utensils className="h-4 w-4" />
                        <span>Vegetable Biryani</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Utensils className="h-4 w-4" />
                        <span>Paneer Tikka Masala</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Weekly Menu</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MenuPage;
