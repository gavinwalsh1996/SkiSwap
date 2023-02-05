import React from "react";
// Components
import Grid from '../components/Grid'

const NearbySnowboards = () => {
  return (
    <div className="p-10 bg-slate-100">
      <h2 className="text-2xl font-bold">Find Equipment in Whistler, BC</h2>
      <div className="mt-4">
        <div className="relative w-64">
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-full w-full"
            placeholder="Search Equipment"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-yellow-400 text-white py-2 px-4 rounded-full mt-4">
            Search
        </button>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded-full mt-4">
            All
        </button>
      </div>
      <div className="mt-8">
        <label className="block font-bold">
          <input type="checkbox" className="mr-2" />
          Snowboards
        </label>
        <label className="block font-bold">
          <input type="checkbox" className="mr-2" />
          Skis
        </label>
      </div>
      <div className="mt-8">
        <label className="block font-bold">
          <input type="radio" name="options" className="mr-2" />
          Swap with owner
        </label>
        <label className="block font-bold">
          <input type="radio" name="options" className="mr-2" />
          Rent for a day
        </label>
      </div>
      <div className="mt-8">
        <label className="block font-bold">Size:</label>
        <select className="bg-gray-200 p-2 rounded-full">
          <option value="">Any</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
        </select>
      </div>
      <Grid />
    </div>
  );
};

export default NearbySnowboards;
