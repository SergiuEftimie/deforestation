
export interface GraphicAttributes {
  tc_loss_ha_2001: number;
  tc_loss_ha_2002: number;
  tc_loss_ha_2003: number;
  tc_loss_ha_2004: number;
  tc_loss_ha_2005: number;
  tc_loss_ha_2006: number;
  tc_loss_ha_2007: number;
  tc_loss_ha_2008: number;
  tc_loss_ha_2009: number;
  tc_loss_ha_2010: number;
  tc_loss_ha_2011: number;
  tc_loss_ha_2012: number;
  tc_loss_ha_2013: number;
  tc_loss_ha_2014: number;
  tc_loss_ha_2015: number;
  tc_loss_ha_2016: number;
  tc_loss_ha_2017: number;
  tc_loss_ha_2018: number;
  tc_loss_ha_2019: number;
  name: string;
  county: string;
  pred_absolute: number;
  total_loss: number;
  pred_party: string;
  pred_percent: number;

  type: "Diaspora" | "Total";
}

export interface YearAttributes {
  name: string;
  field: string;
  color: string;
  value: number;
}